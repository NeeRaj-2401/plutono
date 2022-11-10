package licensing

import (
	"github.com/credativ/plutono/pkg/api/dtos"
	"github.com/credativ/plutono/pkg/models"
	"github.com/credativ/plutono/pkg/services/hooks"
	"github.com/credativ/plutono/pkg/setting"
)

const (
	openSource = "Open Source"
)

type OSSLicensingService struct {
	Cfg          *setting.Cfg        `inject:""`
	HooksService *hooks.HooksService `inject:""`
}

func (*OSSLicensingService) HasLicense() bool {
	return false
}

func (*OSSLicensingService) Expiry() int64 {
	return 0
}

func (*OSSLicensingService) Edition() string {
	return openSource
}

func (*OSSLicensingService) StateInfo() string {
	return ""
}

func (*OSSLicensingService) ContentDeliveryPrefix() string {
	return "plutono-oss"
}

func (l *OSSLicensingService) LicenseURL(user *models.SignedInUser) string {
	if user.IsPlutonoAdmin {
		return l.Cfg.AppSubURL + "/admin/upgrading"
	}

	return "https://grafana.com/products/enterprise/"
}

func (l *OSSLicensingService) Init() error {
	l.HooksService.AddIndexDataHook(func(indexData *dtos.IndexViewData, req *models.ReqContext) {
		for _, node := range indexData.NavTree {
			if node.Id == "admin" {
				node.Children = append(node.Children, &dtos.NavLink{
					Text: "Upgrade",
					Id:   "upgrading",
					Url:  l.LicenseURL(req.SignedInUser),
					Icon: "unlock",
				})
			}
		}
	})

	return nil
}

func (*OSSLicensingService) HasValidLicense() bool {
	return false
}
