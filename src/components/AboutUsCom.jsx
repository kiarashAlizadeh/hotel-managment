import profile from "../assets/images/profile.jpg"

function AboutUsCom() {
  return (
    <>
      <div className="mx-3 my-10 rounded-3xl bg-[#D9EFDE] px-2 pt-2 pb-4">
        <img src={profile} alt="" className="mx-auto my-10 rounded-full" />
        <div className="font-black text-3xl text-center">کیارش علیزاده</div>
      </div>
    </>
  )
}

export default AboutUsCom
