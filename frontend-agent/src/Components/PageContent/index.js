import AppRoutes from "../AppRoutes";
import RulesModal from "../../Components/Modals/Rules/RulesModal"

function PageContent() {

  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div className="PageContent">
      <AppRoutes />
    </div>
  );
}
export default PageContent;
