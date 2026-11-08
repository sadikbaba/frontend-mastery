import {
  Navigate,
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import ApplicationForm from "./components/ApplicationForm.jsx";
import ApplicationList from "./components/ApplicationList.jsx";
import EditApplicationForm from "./components/EditApplicationForm.jsx";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";

export function LoginRoute() {
  const { onLoginSuccess } = useOutletContext();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleLogin() {
    await onLoginSuccess();
    navigate(location.state?.from?.pathname || "/applications", {
      replace: true,
    });
  }

  return (
    <LoginForm
      onLoginSuccess={handleLogin}
      onAuthView={() => navigate("/register")}
    />
  );
}

export function RegisterRoute() {
  const navigate = useNavigate();

  return <RegisterForm onAuthView={() => navigate("/login")} />;
}

export function ApplicationListRoute() {
  const { applications, onApplicationDeleted } = useOutletContext();
  const navigate = useNavigate();

  return (
    <ApplicationList
      applications={applications}
      onDeleted={onApplicationDeleted}
      onAdd={() => navigate("/applications/new")}
      onEdit={(application) =>
        navigate(`/applications/${application.id}/edit`)
      }
    />
  );
}

export function NewApplicationRoute() {
  const { onApplicationCreated } = useOutletContext();
  const navigate = useNavigate();

  function handleCreated(application) {
    onApplicationCreated(application);
    navigate("/applications");
  }

  return (
    <ApplicationForm
      onCreated={handleCreated}
      setCurrentView={() => navigate("/applications")}
    />
  );
}

export function EditApplicationRoute() {
  const { applications, onApplicationUpdated } = useOutletContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const application = applications.find((item) => String(item.id) === id);

  if (!application) {
    return <Navigate to="/applications" replace />;
  }

  return (
    <EditApplicationForm
      key={application.id}
      formData={application}
      onUpdated={(updatedApplication) => {
        onApplicationUpdated(updatedApplication);
        navigate("/applications");
      }}
      onCancel={() => navigate("/applications")}
    />
  );
}
