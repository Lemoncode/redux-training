import { actionsIds } from "./common/action-id";
import { MemberEntity } from "./model/member.entity";
import { getMembersCollection } from "./api/member.api";

export const updateUserProfileName = (newName: string) => ({
  type: actionsIds.UPDATE_USERPROFILE_NAME,
  payload: newName,
});

export const memberRequestCompleted = (members: MemberEntity[]) => ({
  type: actionsIds.MEMBER_REQUEST_COMPLETED,
  payload: members,
});

export const memberRequest = () => (dispatcher) => {
  const promise = getMembersCollection();

  promise.then((data) => dispatcher(memberRequestCompleted(data)));

  return promise;
};
