import { Input } from "../../ui/input";
import JoinForm from "./Form";

function JoinUs() {
  return (
    <div className=" bg-tertiary-9 p-16" id="join">
      <div className="mx-auto flex w-4/6 flex-col items-center">
        <p className=" mb-4 text-lg uppercase tracking-widest text-tertiary-2">
          Join us
        </p>
        <h2 className="text-center text-5xl font-bold leading-normal text-tertiary-1">
          Don’t miss the opportunity to be part of sellsource
        </h2>
        <JoinForm />
        <Input />
      </div>
    </div>
  );
}

export default JoinUs;
