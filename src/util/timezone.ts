import format from "date-fns/format";

export const getKorTime = (curr : Date) => {

  // 2. UTC 시간 계산
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
  // 3. UTC to KST (UTC + 9시간)
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_curr = new Date(utc + KR_TIME_DIFF);

  return format(kr_curr, "yyyy-MM-dd'T'HH:mm:ss'Z'");
};
