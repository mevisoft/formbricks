import { useTranslation } from "react-i18next";

export function I18nKeepAlive() {
  const { t } = useTranslation();

  // Keys mantenidas explícitamente para evitar que el validator las marque como unused
  t("common.report_survey");
  t("common.share_feedback");
  t("common.powered_by_formbricks");

  return null;
}
