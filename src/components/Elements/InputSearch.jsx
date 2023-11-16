import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

const InputSearch = (props) => {
  const { identitas, type = 'text', placeholder = 'masukkan pencarian...' } = props;
  const [focus, setFocus] = useState(false);
  const ringFocus = useRef();
  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  useEffect(() => {
    if (focus) {
      ringFocus.current.style.border = '2px solid blue';
    } else {
      ringFocus.current.style.border = '2px solid #DBDEDE';
    }
  }, [focus]);
  return (
    <div ref={ringFocus} className="rounded-md overflow-hidden lg:w-[400px] w-2/3 min-w-[300px] h-[46px]">
      <form action="" className="flex w-full h-full">
        <input onFocus={onFocus} onBlur={onBlur} type={type} id={identitas} name={identitas} placeholder={placeholder} className="p-3 outline-0 w-4/5 " />
        <button type="button" className="bg-blue-200 w-[20%]">
          <FontAwesomeIcon icon={faMagnifyingGlass} fixedWidth className="text-blue-600" />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
