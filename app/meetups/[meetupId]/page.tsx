"use client"

import { useQuery } from "@tanstack/react-query"
import Image from "next/image"

export default function MeetupPage({
  params,
}: {
  params: { meetupId: string }
}) {
  const handleRegistration = () => {
    console.log("User registered for", meetup.name)
  }

  const { data } = useQuery({ queryKey: ["meetups"] })
  console.log(data)

  return (
    <section className="p-4">
      <Image
        width={200}
        height={120}
        alt="meetup pictures"
        src={`/meetupPics/${meetup.id}.png`}
        className="object-cover"
      />
      <h1 className="text-2xl font-bold">{meetup.name}</h1>
      <p className="mt-2 text-lg">{meetup.description}</p>
      <div className="mt-4">
        <p>tickets: {meetup.numberOfTickets}</p>
      </div>
      <button
        type="button"
        className="mt-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        onClick={handleRegistration}
      >
        Register
      </button>
    </section>
  )
}
