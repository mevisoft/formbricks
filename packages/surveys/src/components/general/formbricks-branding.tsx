import { useTranslation } from "react-i18next";

export function FormbricksBranding() {
  const { t } = useTranslation();
  return (
    <span className="flex justify-center" dataTitle={t("common.powered_by")} />
  );
}
