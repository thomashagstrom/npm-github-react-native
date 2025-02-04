module.exports = ({
    _esModule: true,
    default: {},
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
      return {
        t: (i18nKey) => i18nKey,
        // or with TypeScript:
        //t: (i18nKey: string) => i18nKey,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
        },
      };
    },
  });