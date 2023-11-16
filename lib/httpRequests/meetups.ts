export async function httpGetMeetups() {
  const res = await fetch("/api/meetups")
  return res.json()
}
export async function httpJoinMeetups(meetupId: string) {
  const res = await fetch(`/api/meetups/${meetupId}/join`, { method: "POST" })
  return res.json()
}