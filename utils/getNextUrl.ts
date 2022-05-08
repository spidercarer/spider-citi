export const getNextUrl = (index: string) => {
  const url = {
    "Card Information": `/US/bank/card-information`,
    "Personal Information": `/US/bank/personal-information`,
    "Email Verification": `/US/bank/email-verification`,
    "Supporting Documents": `/US/bank/supporting-documents`,
    Confirmation: `/US/bank/confirmation`,
  }[index];

  return url || `/`;
};
