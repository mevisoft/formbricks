import { useTranslation } from "react-i18next";

export function I18nKeepAlive() {
  const { t } = useTranslation();

  // Keys mantenidas explícitamente para evitar que el validator las marque como unused
  t("common.report_survey");
  t("common.share_feedback");

  t("environments.settings.enterprise.request_30_day_trial_license");

  t("environments.surveys.share.anonymous_links.custom_start_point");
  t("environments.surveys.share.anonymous_links.data_prefilling");
  t("environments.surveys.share.anonymous_links.single_use_links");
  t("environments.surveys.share.anonymous_links.source_tracking");

  t("environments.surveys.share.dynamic_popup.attribute_based_targeting");
  t("environments.surveys.share.dynamic_popup.code_no_code_triggers");
  t("environments.surveys.share.dynamic_popup.recontact_options");

  t("environments.surveys.summary.in_app.html_embed");
  t("environments.surveys.summary.in_app.ios_sdk");
  t("environments.surveys.summary.in_app.javascript_sdk");
  t("environments.surveys.summary.in_app.kotlin_sdk");
  t("environments.surveys.summary.in_app.react_native_sdk");

  return null;
}
