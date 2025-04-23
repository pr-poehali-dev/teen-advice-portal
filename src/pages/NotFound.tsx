
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-white text-center p-4">
      <h1 className="text-6xl font-bold text-purple-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Страница не найдена</h2>
      <p className="text-gray-600 max-w-md mb-8">
        Упс! Похоже, ты исследуешь неизведанные территории. Это говорит о твоём любопытстве, но давай вернёмся на основную страницу.
      </p>
      <Button asChild size="lg">
        <Link to="/">Вернуться на главную</Link>
      </Button>
    </div>
  );
};

export default NotFound;
