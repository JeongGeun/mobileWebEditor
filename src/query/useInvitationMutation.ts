import { postInvitation } from "@/apis/list";
import { useMutation } from "@tanstack/react-query";

export const useInvitationMutation = () => {
  return useMutation({ mutationFn: postInvitation });
};
