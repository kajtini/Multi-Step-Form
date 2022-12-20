function InputInfo({ inputType, handleChange, inputData }) {
  const placeholders = {
    holderName: "e.g. Stephen King",
    holderEmail: "e.g. stephenking@lorem.com",
    holderPhone: "e.g. +1 234 567 890",
  };

  function determinePlaceholder(type) {
    switch (type) {
      case "name":
        return placeholders.holderName;
      case "email":
        return placeholders.holderEmail;
      case "phone":
        return placeholders.holderPhone;
    }
  }

  return (
    <input
      type="text"
      placeholder={determinePlaceholder(inputType)}
      className="placeholder:font-bold border-neutral-gray-light border-[1px] border-solid w-full p-3 rounded-lg focus:outline-primary-blue-purplish text-neutral-gray-cool font-bold"
      onChange={(event) => handleChange(event, inputType)}
      value={inputData}
    ></input>
  );
}

export default InputInfo;
