import { getInvitationList } from "@/apis/list";
import Main from "@/components/Main";

const App = async () => {
  const initialData = await getInvitationList();
  return <Main initialData={initialData} />;
};

export default App;
