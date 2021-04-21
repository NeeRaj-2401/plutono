+++
title = "Release notes for Grafana 7.5.0-beta1"
[_build]
list = false
+++

<!-- Auto generated by update changelog github action -->

# Release notes for Grafana 7.5.0-beta1

### Features and enhancements

* **Alerting**: Customise OK notification priorities for Pushover notifier. [#30169](https://github.com/grafana/grafana/pull/30169), [@acaire](https://github.com/acaire)
* **Alerting**: Improve default message for SensuGo notifier. [#31428](https://github.com/grafana/grafana/pull/31428), [@M4teo](https://github.com/M4teo)
* **Alerting**: PagerDuty: adding current state to the payload. [#29270](https://github.com/grafana/grafana/pull/29270), [@Eraac](https://github.com/Eraac)
* **AzureMonitor**: Add deprecation message for App Insights/Insights Analytics. [#30633](https://github.com/grafana/grafana/pull/30633), [@joshhunt](https://github.com/joshhunt)
* **CloudMonitoring**: Allow free text input for GCP project on dashboard variable query. [#28048](https://github.com/grafana/grafana/issues/28048)
* **CloudMonitoring**: Increase service api page size. [#30892](https://github.com/grafana/grafana/pull/30892), [@sunker](https://github.com/sunker)
* **CloudMonitoring**: Show service and SLO display name in SLO Query editor. [#30900](https://github.com/grafana/grafana/pull/30900), [@sunker](https://github.com/sunker)
* **CloudWatch**: Add AWS Ground Station metrics and dimensions. [#31362](https://github.com/grafana/grafana/pull/31362), [@ilyastoli](https://github.com/ilyastoli)
* **CloudWatch**: Add AWS Network Firewall metrics and dimensions. [#31498](https://github.com/grafana/grafana/pull/31498), [@ilyastoli](https://github.com/ilyastoli)
* **CloudWatch**: Add AWS Timestream Metrics and Dimensions. [#31624](https://github.com/grafana/grafana/pull/31624), [@ilyastoli](https://github.com/ilyastoli)
* **CloudWatch**: Add RDS Proxy metrics. [#31595](https://github.com/grafana/grafana/pull/31595), [@sunker](https://github.com/sunker)
* **CloudWatch**: Add eu-south-1 Cloudwatch region. [#31198](https://github.com/grafana/grafana/pull/31198), [@rubycut](https://github.com/rubycut)
* **CloudWatch**: Make it possible to specify custom api endpoint. [#31402](https://github.com/grafana/grafana/pull/31402), [@sunker](https://github.com/sunker)
* **Cloudwatch**: Add AWS/DDoSProtection metrics and dimensions. [#31297](https://github.com/grafana/grafana/pull/31297), [@relvira](https://github.com/relvira)
* **Dashboard**: Remove template variables option from ShareModal. [#30395](https://github.com/grafana/grafana/pull/30395), [@oscarkilhed](https://github.com/oscarkilhed)
* **Docs**: Define TLS/SSL terminology. [#30533](https://github.com/grafana/grafana/pull/30533), [@aknuds1](https://github.com/aknuds1)
* **Elasticsearch**: Add word highlighting to search results. [#30293](https://github.com/grafana/grafana/pull/30293), [@simianhacker](https://github.com/simianhacker)
* **Folders**: Editors should be able to edit name and delete folders. [#31242](https://github.com/grafana/grafana/pull/31242), [@torkelo](https://github.com/torkelo)
* **Graphite/SSE**: update graphite to work with server side expressions. [#31455](https://github.com/grafana/grafana/pull/31455), [@kylebrandt](https://github.com/kylebrandt)
* **InfluxDB**: Improve maxDataPoints error-message in Flux-mode, raise limits. [#31259](https://github.com/grafana/grafana/pull/31259), [@gabor](https://github.com/gabor)
* **InfluxDB**: In flux query editor, do not run query when disabled. [#31324](https://github.com/grafana/grafana/pull/31324), [@gabor](https://github.com/gabor)
* **LogsPanel**: Add deduplication option for logs. [#31019](https://github.com/grafana/grafana/pull/31019), [@ivanahuckova](https://github.com/ivanahuckova)
* **Loki**: Add line limit for annotations. [#31183](https://github.com/grafana/grafana/pull/31183), [@ivanahuckova](https://github.com/ivanahuckova)
* **Loki**: Add support for alerting. [#31424](https://github.com/grafana/grafana/pull/31424), [@ivanahuckova](https://github.com/ivanahuckova)
* **Loki**: Label browser. [#30351](https://github.com/grafana/grafana/pull/30351), [@davkal](https://github.com/davkal)
* **PieChart**: Add color changing options to pie chart. [#31588](https://github.com/grafana/grafana/pull/31588), [@oscarkilhed](https://github.com/oscarkilhed)
* **PostgreSQL**: Allow providing TLS/SSL certificates as text in addition to file paths. [#30353](https://github.com/grafana/grafana/pull/30353), [@ying-jeanne](https://github.com/ying-jeanne)
* **Postgres**: SSL certification. [#30352](https://github.com/grafana/grafana/pull/30352), [@ying-jeanne](https://github.com/ying-jeanne)
* **Profile**: Prevent OAuth users from changing user details or password. [#27886](https://github.com/grafana/grafana/pull/27886), [@dupondje](https://github.com/dupondje)
* **Prometheus**: Change default httpMethod for new instances to POST. [#31292](https://github.com/grafana/grafana/pull/31292), [@ivanahuckova](https://github.com/ivanahuckova)
* **Prometheus**: Min step defaults to seconds when no unit is set. [#30966](https://github.com/grafana/grafana/pull/30966), [@nutmos](https://github.com/nutmos)
* **Stats**: Exclude folders from total dashboard count. [#31320](https://github.com/grafana/grafana/pull/31320), [@bergquist](https://github.com/bergquist)
* **Tracing**: Specify type of data frame that is expected for TraceView. [#31465](https://github.com/grafana/grafana/pull/31465), [@aocenas](https://github.com/aocenas)
* **Transformers**: Add search to transform selection. [#30854](https://github.com/grafana/grafana/pull/30854), [@ryantxu](https://github.com/ryantxu)

### Bug fixes

* **Alerting**: Ensure Discord notification is sent when metric name is absent. [#31257](https://github.com/grafana/grafana/pull/31257), [@LeviHarrison](https://github.com/LeviHarrison)
* **Alerting**: Fix case when Alertmanager notifier fails if a URL is not working. [#31079](https://github.com/grafana/grafana/pull/31079), [@kurokochin](https://github.com/kurokochin)
* **CloudMonitoring**: Prevent resource type variable function from crashing. [#30901](https://github.com/grafana/grafana/pull/30901), [@sunker](https://github.com/sunker)
* **Color**: Fix issue where colors are reset to gray when switching panels. [#31611](https://github.com/grafana/grafana/pull/31611), [@torkelo](https://github.com/torkelo)
* **Explore**: Show ANSI colored logs in logs context. [#31510](https://github.com/grafana/grafana/pull/31510), [@ivanahuckova](https://github.com/ivanahuckova)
* **Explore**: keep enabled/disabled state in angular based QueryEditors correctly. [#31558](https://github.com/grafana/grafana/pull/31558), [@gabor](https://github.com/gabor)
* **Graph**: Fix tooltip not being displayed when close to edge of viewport. [#31493](https://github.com/grafana/grafana/pull/31493), [@msober](https://github.com/msober)
* **Heatmap**: Fix missing value in legend. [#31430](https://github.com/grafana/grafana/pull/31430), [@kurokochin](https://github.com/kurokochin)
* **InfluxDB**: Handle columns named "table". [#30985](https://github.com/grafana/grafana/pull/30985), [@gabor](https://github.com/gabor)
* **Prometheus**: Use configured HTTP method for /series and /labels endpoints. [#31401](https://github.com/grafana/grafana/pull/31401), [@ivanahuckova](https://github.com/ivanahuckova)
* **RefreshPicker**: Make valid intervals in url visible in RefreshPicker. [#30474](https://github.com/grafana/grafana/pull/30474), [@hugohaggmark](https://github.com/hugohaggmark)
* **TimeSeriesPanel**: Fix overlapping time axis ticks. [#31332](https://github.com/grafana/grafana/pull/31332), [@torkelo](https://github.com/torkelo)
* **TraceViewer**: Fix show log marker in spanbar. [#30742](https://github.com/grafana/grafana/pull/30742), [@zoltanbedi](https://github.com/zoltanbedi)

### Plugin development fixes & changes

* **Plugins**: Add autoEnabled plugin JSON field to auto enable App plugins and add configuration link to menu by default. [#31354](https://github.com/grafana/grafana/pull/31354), [@torkelo](https://github.com/torkelo)
* **Pagination**: Improve pagination for large number of pages. [#30151](https://github.com/grafana/grafana/pull/30151), [@nathanrodman](https://github.com/nathanrodman)