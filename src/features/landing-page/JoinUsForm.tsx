import FormJoin from "./FormJoin";

function JoinUs() {
  return (
    <div className=" bg-tertiary-9 p-16" id="join">
      <div className="mx-auto flex w-4/6 flex-col items-center">
        <p className=" mb-4 text-lg uppercase tracking-widest text-tertiary-2">
          Join us
        </p>
        <h2 className="mb-6 text-center text-4xl font-bold leading-normal text-tertiary-1">
          Don’t miss the opportunity to be part of sellsource
        </h2>

        <FormJoin />
      </div>
    </div>
  );
}

export default JoinUs;
