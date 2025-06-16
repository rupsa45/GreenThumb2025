import { Link, useParams } from "react-router-dom";
import { useLocation } from "../Context/LocationProvider";
import { ArrowLeft } from 'lucide-react';


const DashboardNav = () => {
  const {state} = useLocation();
    const {crop}=useParams();
   return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link to={`/crop-detail/${crop}/${state}`}>
              <div className="flex items-center ">
                <span className="ml-2 text-5xl font-bold hover:bg-gray-100 transition-colors">
                   <ArrowLeft className="h-5 w-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardNav
