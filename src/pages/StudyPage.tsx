import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import PageHeader from "@/components/PageHeader";
import { Check, BookOpen, BrainCircuit, Clock } from "lucide-react";

export default function StudyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Эффективная учёба" 
        description="Методики и приёмы для успешного обучения без выгорания"
        icon={<BookOpen className="h-8 w-8 text-primary" />}
      />
      
      <Tabs defaultValue="techniques" className="w-full mt-8">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="techniques">Техники обучения</TabsTrigger>
          <TabsTrigger value="motivation">Мотивация</TabsTrigger>
        </TabsList>
        
        <TabsContent value="techniques" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Техника Помодоро</CardTitle>
                <CardDescription>Метод управления временем для более продуктивной учёбы</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Учись 25 минут без отвлечений</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Делай перерыв 5 минут</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>После 4 циклов делай длинный перерыв 15-30 минут</span>
                  </li>
                </ul>
                <Button variant="outline" className="mt-4 w-full">Подробнее</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Активное повторение</CardTitle>
                <CardDescription>Закрепляй знания через практику и повторение</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Проговаривай материал вслух</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Создавай краткий конспект своими словами</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Решай практические задачи по теме</span>
                  </li>
                </ul>
                <Button variant="outline" className="mt-4 w-full">Подробнее</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Интервальное повторение</CardTitle>
                <CardDescription>Метод для долгосрочного запоминания</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Повторяй через 1 день, затем через 3 дня</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Используй приложения с карточками (Anki, Quizlet)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Постепенно увеличивай интервалы между повторениями</span>
                  </li>
                </ul>
                <Button variant="outline" className="mt-4 w-full">Подробнее</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="motivation" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Как сохранять мотивацию к учёбе</CardTitle>
                <CardDescription>Практические советы, которые помогут не потерять интерес к обучению</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <BrainCircuit className="mr-2 h-5 w-5" /> Найди связь с реальным миром
                    </h3>
                    <p className="text-muted-foreground">
                      Исследуй, как изучаемые темы применяются в реальной жизни или в профессиях, которые тебе интересны. 
                      Когда ты понимаешь практическую пользу знаний, учиться становится намного интереснее.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <Clock className="mr-2 h-5 w-5" /> Ставь конкретные цели
                    </h3>
                    <p className="text-muted-foreground">
                      Разбивай большие задачи на маленькие достижимые цели. Вместо "выучить всю физику" поставь цель "разобраться с тремя законами Ньютона к среде". 
                      Отмечай прогресс и празднуй маленькие победы.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <BookOpen className="mr-2 h-5 w-5" /> Учись с друзьями
                    </h3>
                    <p className="text-muted-foreground">
                      Создай группу для подготовки, где вы будете объяснять темы друг другу и проверять знания. 
                      Социальный аспект учёбы не только делает процесс веселее, но и помогает глубже усваивать материал.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
