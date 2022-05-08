export const getProgress = () => {
  return [
    `Card Information`,
    `Personal Information`,
    `Email Verification`,
    ...(process.env.NEXT_PUBLIC_DOCS_PAGE === `ON`
      ? [`Supporting Documents`]
      : []),
    `Confirmation`, // don't move this, Confirmation needs to come last
  ];
};
