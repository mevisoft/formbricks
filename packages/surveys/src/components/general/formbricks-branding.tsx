import { useTranslation } from "react-i18next";

export function FormbricksBranding() {
  const { t } = useTranslation();
  t("common.powered_by");
  return <span className="flex justify-center" data-title={t("common.powered_by")} />;
}
