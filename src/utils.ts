import { AxiosError } from "axios";

interface ErrorResponse {
  message: string | string[]; // message can be a string or an array of strings
}

export default class Utils {
  static ExtractErrorMessage = (err: AxiosError): string | undefined => {
    const axiosError = err as AxiosError<ErrorResponse>;

    const errResponseData = axiosError?.response?.data;

    const displayErrorMessage = Array.isArray(errResponseData?.message)
      ? errResponseData.message.join(", ")
      : errResponseData?.message;

    return displayErrorMessage;
  };
}
