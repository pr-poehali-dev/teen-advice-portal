
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Book, Dumbbell, Clock, Users, HeartHandshake } from "lucide-react";

const Index = () => {
  const adviceCategories = [
    {
      title: "Развитие мозга",
      description: "Как сохранить и развивать свой интеллект",
      icon: <Brain className="h-10 w-10 text-purple-500" />,
      path: "/brain",
    },
    {
      title: "Учёба без стресса",
      description: "Эффективные методы обучения, которые реально работают",
      icon: <Book className="h-10 w-10 text-blue-500" />,
      path: "/study",
    },
    {
      title: "Физическая активность",
      description: "Движение - жизнь, особенно для твоего мозга",
      icon: <Dumbbell className="h-10 w-10 text-green-500" />,
      path: "/fitness",
    },
    {
      title: "Тайм-менеджмент",
      description: "Управляй временем, а не оно тобой",
      icon: <Clock className="h-10 w-10 text-orange-500" />,
      path: "/time",
    },
    {
      title: "Общение и дружба",
      description: "Как строить здоровые отношения и не потерять себя",
      icon: <Users className="h-10 w-10 text-red-500" />,
      path: "/relationships",
    },
    {
      title: "Психическое здоровье",
      description: "Забота о себе - это не эгоизм, а необходимость",
      icon: <HeartHandshake className="h-10 w-10 text-pink-500" />,
      path: "/mental-health",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="py-8 px-4 md:px-8 lg:px-16 bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-2">АнтиДеградация</h1>
              <p className="text-slate-600 max-w-md">Советы для осознанного развития в мире, который способствует деградации</p>
            </div>
            <nav>
              <ul className="flex gap-4">
                <li><Button variant="outline">О проекте</Button></li>
                <li><Button>Начать развитие</Button></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Не дай своим мозгам заржаветь</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Современный мир полон соблазнов, которые не требуют от тебя мыслительных усилий. 
              Вот как сохранить и развить свой потенциал.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adviceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-center">{category.title}</CardTitle>
                  <CardDescription className="text-center">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Узнай, как избежать ловушек современного мира и развить сильные стороны в этой области.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button asChild variant="outline" className="w-full">
                    <Link to={category.path}>Подробнее</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-purple-100 rounded-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-purple-900 mb-4">Почему подростки деградируют?</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <p>Соцсети заменяют глубокое общение поверхностными контактами</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <p>Клиповое мышление мешает концентрироваться на сложных задачах</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <p>Пассивное потребление контента не развивает критическое мышление</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <p>Недостаток физической активности тормозит развитие мозга</p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Как с этим бороться?</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <p>Регулярно практикуй глубокую концентрацию ("глубокую работу")</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <p>Замени пассивное потребление активным изучением</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <p>Развивай навыки общения в реальном мире, а не только онлайн</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <p>Включи 30+ минут физической активности в свой ежедневный режим</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Начни меняться прямо сейчас</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Маленькие изменения сегодня приведут к большим результатам завтра. 
            Выбери одну сферу и начни развиваться.
          </p>
          <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
            Пройти тест на уровень развития
          </Button>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">АнтиДеградация</h2>
              <p className="text-slate-300">© 2023 Все права защищены</p>
            </div>
            <div>
              <ul className="flex gap-4">
                <li><a href="#" className="text-slate-300 hover:text-white">О нас</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white">Контакты</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white">Помощь</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
