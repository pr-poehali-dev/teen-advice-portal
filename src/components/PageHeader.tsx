
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
}

const PageHeader = ({ title, description, icon, color = "purple" }: PageHeaderProps) => {
  return (
    <header className={`py-8 px-4 md:px-8 lg:px-16 bg-${color}-50 border-b border-${color}-100`}>
      <div className="container mx-auto">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link to="/" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            <span>Назад</span>
          </Link>
        </Button>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center gap-4">
            {icon && <div className={`text-${color}-500`}>{icon}</div>}
            <div>
              <h1 className={`text-3xl md:text-4xl font-bold text-${color}-800 mb-2`}>{title}</h1>
              <p className="text-slate-600 max-w-md">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
