import { uploadFiles } from "@/apis/upload";
import { useMutation } from "@tanstack/react-query";

export function useFileUploadMutation() {
  return useMutation({ mutationFn: uploadFiles });
}
