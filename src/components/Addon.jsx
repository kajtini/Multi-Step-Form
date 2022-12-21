function Addon({ type, desc, billing }) {
  return (
    <div className="px-7 py-5 border-solid border-[1px] border-neutral-gray-cool rounded-xl flex items-center gap-7 cursor-pointer">
      <div className="w-6 h-6 border-solid border-[1px] border-neutral-gray-cool rounded-md  flex items-center justify-center cursor-pointer">
        <img
          src="../../../public/images/icon-checkmark.svg"
          alt="checkmark icon"
        />
      </div>
      <div className="mr-auto">
        <p className="font-medium text-primary-blue-marine text-xl">{type}</p>
        <p className="font-medium text-neutral-gray-cool text-sm">{desc}</p>
      </div>
      <div className="text-primary-blue-purplish font-medium">
        +${billing}/mo
      </div>
    </div>
  );
}

export default Addon;
