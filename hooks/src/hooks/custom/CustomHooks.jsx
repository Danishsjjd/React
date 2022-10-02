import ArrayComponent from "./useArray/ArrayComponent";
import CopyToClipboardComponent from "./useCopyToClipboard/CopyToClipboardComponent";
import DarkModeComponent from "./useDarkMode/DarkModeComponent";
import DebounceComponent from "./useDebounce/DebounceComponent";
import OnlineStatusComponent from "./useOnlineStatus/OnlineStatusComponent";
import PreviousComponent from "./usePrevious/PreviousComponent";
import StateWithHistoryComponent from "./useStateWithHistory/StateWithHistoryComponent";
import StorageComponent from "./useStorage/StorageComponent";

function CustomHooks() {
  return (
    <>
      <h2>useDebounce</h2>
      <DebounceComponent />

      <h2>useArray</h2>
      <ArrayComponent />

      <h2>useStorage</h2>
      <StorageComponent />

      <h2>useCopyToClipBoard</h2>
      <CopyToClipboardComponent />

      <h2>useDarkMode</h2>
      <DarkModeComponent />

      <h2>usePreviousComponent</h2>
      <PreviousComponent />

      <h2>useStateWithHistory</h2>
      <StateWithHistoryComponent />

      <h2>useOnline</h2>
      <OnlineStatusComponent />
    </>
  );
}

export default CustomHooks;
