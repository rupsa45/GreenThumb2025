import { Link} from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const DashboardNavbar = () => {


  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Back Navigation */}
          <div className="flex items-center gap-4">
            <Link
              to="/weather"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors group"
              aria-label="Go back to weather page"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 hidden sm:inline">
                Back to Dashboard
              </span>
            </Link>

          </div>

        </div>
      </div>
    </div>
  )
}

export default DashboardNavbar
