
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Clock, Calendar, ListTodo, Check, X, AlertCircle, TimerReset, CirclePlay, PauseCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function TimePage() {
  const [timer, setTimer] = useState<{ active: boolean; secondsLeft: number }>({
    active: false,
    secondsLeft: 25 * 60
  });

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    setTimer(prev => ({ ...prev, active: !prev.active }));
  };

  const resetTimer = () => {
    setTimer({ active: false, secondsLeft: 25 * 60 });
  };

  return (
    <div className="container max-w-6xl mx-auto py-6 px-4 md:px-6">
      <PageHeader
        title="Управление временем"
        description="Научись эффективно управлять своим временем и достигать целей"
        icon={<Clock className="h-8 w-8 text-primary" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
        <div className="md:col-span-8">
          <Tabs defaultValue="basics" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="basics">Основы тайм-менеджмента</TabsTrigger>
              <TabsTrigger value="techniques">Техники и методы</TabsTrigger>
              <TabsTrigger value="planning">Планирование</TabsTrigger>
            </TabsList>

            <TabsContent value="basics" className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Почему важно управлять временем?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      Преимущества
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Меньше стресса и тревожности</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Больше времени на хобби и отдых</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Лучшие результаты в учёбе</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Развитие самодисциплины</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <X className="h-5 w-5 text-red-500" />
                      Последствия прокрастинации
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                        <span>Постоянный стресс и недосып</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                        <span>Снижение качества работы</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                        <span>Упущенные возможности</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                        <span>Чувство вины и самокритика</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert className="bg-amber-50">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <AlertTitle>Знаешь ли ты?</AlertTitle>
                <AlertDescription>
                  Исследования показывают, что подростки, которые хорошо управляют своим временем, 
                  имеют более высокую академическую успеваемость и меньший уровень стресса.
                </AlertDescription>
              </Alert>
            </TabsContent>

            <TabsContent value="techniques" className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Эффективные техники</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Метод Помодоро</CardTitle>
                    <CardDescription>
                      Техника для борьбы с отвлечениями и повышения концентрации
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Выбери задачу, которую нужно выполнить</li>
                      <li>Установи таймер на 25 минут</li>
                      <li>Работай над задачей, пока не прозвенит таймер</li>
                      <li>Сделай короткий перерыв (5 минут)</li>
                      <li>После 4 "помидоров" сделай длинный перерыв (15-30 минут)</li>
                    </ol>
                    <Button variant="outline" className="w-full" onClick={resetTimer}>
                      Попробовать прямо сейчас
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Матрица Эйзенхауэра</CardTitle>
                    <CardDescription>
                      Техника приоритизации задач по срочности и важности
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="border p-3 bg-green-50">
                        <p className="font-bold">Важно и срочно</p>
                        <p className="text-sm">Сделать немедленно</p>
                      </div>
                      <div className="border p-3 bg-blue-50">
                        <p className="font-bold">Важно, но не срочно</p>
                        <p className="text-sm">Запланировать время</p>
                      </div>
                      <div className="border p-3 bg-yellow-50">
                        <p className="font-bold">Срочно, но не важно</p>
                        <p className="text-sm">Делегировать</p>
                      </div>
                      <div className="border p-3 bg-gray-50">
                        <p className="font-bold">Не важно и не срочно</p>
                        <p className="text-sm">Исключить</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="planning" className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Планирование дня и недели</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Как составить эффективный план
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal list-inside space-y-4">
                      <li className="pb-3 border-b">
                        <strong>Определи свои цели</strong>
                        <p className="ml-6 mt-1 text-gray-600">
                          Сформулируй конкретные, измеримые, достижимые цели
                        </p>
                      </li>
                      <li className="pb-3 border-b">
                        <strong>Раздели большие задачи на маленькие</strong>
                        <p className="ml-6 mt-1 text-gray-600">
                          Большие проекты легче выполнять, разбив их на этапы
                        </p>
                      </li>
                      <li className="pb-3 border-b">
                        <strong>Расставь приоритеты</strong>
                        <p className="ml-6 mt-1 text-gray-600">
                          Используй метод ABC или матрицу Эйзенхауэра
                        </p>
                      </li>
                      <li className="pb-3 border-b">
                        <strong>Планируй с запасом</strong>
                        <p className="ml-6 mt-1 text-gray-600">
                          Оставляй 20% времени на непредвиденные обстоятельства
                        </p>
                      </li>
                      <li>
                        <strong>Регулярно пересматривай планы</strong>
                        <p className="ml-6 mt-1 text-gray-600">
                          Анализируй, что работает, а что нет, и корректируй
                        </p>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ListTodo className="h-5 w-5" />
                      Полезные инструменты планирования
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4">
                        <h3 className="font-semibold mb-2">Бумажные планировщики</h3>
                        <p className="text-sm text-gray-600">Ежедневники, bullet journal, планеры</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h3 className="font-semibold mb-2">Цифровые календари</h3>
                        <p className="text-sm text-gray-600">Google Calendar, Apple Calendar</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h3 className="font-semibold mb-2">Приложения для задач</h3>
                        <p className="text-sm text-gray-600">Todoist, Microsoft To Do, Notion</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="md:col-span-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Таймер Помодоро</CardTitle>
              <CardDescription className="text-center">
                Используй для повышения концентрации
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-5xl font-mono font-bold mb-4">{formatTime(timer.secondsLeft)}</div>
                <div className="flex justify-center gap-2">
                  <Button
                    variant={timer.active ? "destructive" : "default"}
                    className="w-1/2"
                    onClick={toggleTimer}
                  >
                    {timer.active ? (
                      <PauseCircle className="mr-2 h-4 w-4" />
                    ) : (
                      <CirclePlay className="mr-2 h-4 w-4" />
                    )}
                    {timer.active ? "Пауза" : "Старт"}
                  </Button>
                  <Button variant="outline" className="w-1/2" onClick={resetTimer}>
                    <TimerReset className="mr-2 h-4 w-4" />
                    Сброс
                  </Button>
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Советы:</h3>
                <ul className="text-sm space-y-1">
                  <li className="flex items-start gap-1">
                    <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Убери все отвлекающие факторы</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Во время перерыва отойди от компьютера</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Веди учёт выполненных "помидоров"</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Цитата дня</CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="border-l-4 border-primary pl-4 italic">
                "Время — это то, чего нам больше всего не хватает, но что мы чаще всего тратим зря."
                <footer className="text-right mt-2 text-sm">— Уильям Пенн</footer>
              </blockquote>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Проверь себя</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Определи свои главные "пожиратели времени":</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="social" className="mr-2" />
                  <label htmlFor="social">Социальные сети</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="video" className="mr-2" />
                  <label htmlFor="video">Видео и стриминг</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="games" className="mr-2" />
                  <label htmlFor="games">Компьютерные игры</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="procrastination" className="mr-2" />
                  <label htmlFor="procrastination">Откладывание дел</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="multitasking" className="mr-2" />
                  <label htmlFor="multitasking">Многозадачность</label>
                </div>
              </div>
              <Button className="mt-4 w-full">Получить рекомендации</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
