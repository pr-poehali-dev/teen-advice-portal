
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowLeft, Dumbbell, HeartPulse, Clock, Utensils } from "lucide-react";

export default function FitnessPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <Button variant="outline" size="icon" asChild>
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Физическое развитие</h1>
      </div>

      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6">
          Физическая активность не только укрепляет тело, но и улучшает работу мозга, настроение и общую продуктивность. Вот несколько советов, как поддерживать хорошую физическую форму.
        </p>

        <Tabs defaultValue="basics" className="mb-10">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="basics">Основы</TabsTrigger>
            <TabsTrigger value="workouts">Тренировки</TabsTrigger>
            <TabsTrigger value="nutrition">Питание</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basics">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HeartPulse className="h-5 w-5 text-rose-500" />
                    Регулярность важнее интенсивности
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Лучше заниматься 20-30 минут каждый день, чем изнурять себя 2-часовыми тренировками раз в неделю. Постоянство создаёт привычку и даёт устойчивые результаты.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-500" />
                    Найди своё время
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Одни люди продуктивнее утром, другие вечером. Выбери время для тренировок, когда ты чувствуешь себя энергичным, и тогда занятия будут в радость.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-purple-500" />
                    Разнообразие активностей
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Сочетай кардио (бег, плавание, велосипед), силовые тренировки и растяжку. Это даёт комплексное развитие и снижает риск травм от однообразных нагрузок.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="workouts">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Домашняя тренировка без оборудования</CardTitle>
                  <CardDescription>Займёт 15-20 минут, подходит для начинающих</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Приседания - 3 подхода по 15 повторений</li>
                    <li>Отжимания (можно с колен) - 3 подхода по 10 повторений</li>
                    <li>Планка - 3 подхода по 30 секунд</li>
                    <li>Скручивания на пресс - 3 подхода по 15 повторений</li>
                    <li>Прыжки на месте - 3 подхода по 30 секунд</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">Отдых между подходами: 30-60 секунд</p>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Кардиотренировка на улице</CardTitle>
                  <CardDescription>Займёт 25-30 минут, средняя интенсивность</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Разминка: быстрая ходьба - 5 минут</li>
                    <li>Интервалы: 30 секунд бега + 1 минута ходьбы</li>
                    <li>Повтори интервалы 8-10 раз</li>
                    <li>Заминка: медленная ходьба - 5 минут</li>
                  </ol>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">Выполняй 2-3 раза в неделю, постепенно увеличивая время бега</p>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="nutrition">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-green-500" />
                    Базовые принципы питания
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <strong>Потребляй достаточно белка</strong> - необходим для роста и восстановления мышц. Источники: мясо, рыба, яйца, творог, бобовые.
                    </li>
                    <li>
                      <strong>Не исключай углеводы</strong> - основной источник энергии. Выбирай сложные углеводы: крупы, макароны из твёрдых сортов пшеницы, овощи.
                    </li>
                    <li>
                      <strong>Здоровые жиры важны</strong> - необходимы для гормонального баланса. Источники: орехи, авокадо, оливковое масло, рыба.
                    </li>
                    <li>
                      <strong>Питьевой режим</strong> - пей не менее 1,5-2 литров воды в день, особенно при физических нагрузках.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Пример питания в день тренировки</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Завтрак (за 1,5-2 часа до тренировки)</h3>
                      <p>Овсянка на молоке с бананом и орехами или омлет с овощами и тостом</p>
                    </div>
                    <div>
                      <h3 className="font-medium">После тренировки (в течение 30-60 минут)</h3>
                      <p>Протеиновый коктейль или творог с фруктами</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Обед</h3>
                      <p>Куриная грудка или рыба с гречкой/рисом и салатом</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Ужин</h3>
                      <p>Запеченные овощи с индейкой или тушеные бобовые</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Помни!</h2>
          <p className="text-lg">
            Физическая активность — это не только о красивом теле или спортивных достижениях. Это инвестиция в твоё здоровье, ясность ума и эмоциональное благополучие. Начни с малого, будь последователен, и результаты не заставят себя ждать.
          </p>
        </div>
      </div>
    </div>
  );
}
