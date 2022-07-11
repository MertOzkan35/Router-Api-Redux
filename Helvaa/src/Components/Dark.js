import { useSelector, useDispatch } from "react-redux";
import { setDarkMode } from "../stores/site";
function Dark() {
  const dispatch = useDispatch();
  const { dark } = useSelector((state) => state.site);

  return (
    <div>
      <button onClick={() => dispatch(setDarkMode())}>
        {dark ? "darkMod" : "lightMod"}
      </button>
    </div>
  );
}

export default Dark;
