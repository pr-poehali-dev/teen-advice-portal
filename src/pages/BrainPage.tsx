
import PageHeader from "@/components/PageHeader";
import { Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BrainPage = () => {
  const brainTips = [
    {
      title: "Читай книги (настоящие)",
      content: "Чтение сложных текстов развивает участки мозга, отвечающие за анализ и критическое мышление. Выбирай книги, а не короткие посты."
    },
    {
      title: "Учи новые навыки",
      content: "Изучение нового языка, игра на инструменте или освоение программирования создают новые нейронные связи."
    },
    {
      title: "Медитируй каждый день",
      content: "Практика медитации не только снижает стресс, но и улучшает концентрацию внимания, что критично для интеллектуального развития."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <PageHeader 
        title="Развитие мозга" 
        description="Как сохранить и развивать свой интеллект в эпоху цифрового шума"
        icon={<Brain className="h-12 w-12" />}
        color="purple"
      />

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">Почему твой мозг нуждается в тренировке?</h2>
          <div className="prose prose-slate max-w-none">
            <p>
              Современные технологии меняют то, как работает твой мозг. Короткие ролики, постоянные уведомления и быстрая смена 
              стимулов приучают мозг к поверхностной обработке информации. В результате:
            </p>
            <ul>
              <li>Снижается способность к длительной концентрации</li>
              <li>Ухудшается глубина анализа информации</li>
              <li>Страдает память и способность к обучению</li>
            </ul>
            <p>
              Но хорошая новость: твой мозг пластичен и может меняться благодаря регулярным тренировкам. 
              Следующие советы помогут развить когнитивные способности.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">Топ-3 совета для развития мозга</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brainTips.map((tip, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-700">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{tip.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-purple-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Упражнение дня: Глубокое чтение</h2>
          <div className="prose prose-slate max-w-none">
            <p>
              Посвяти 30 минут непрерывному чтению бумажной книги без отвлечений на гаджеты. 
              Важно: выбери книгу, которая заставит тебя думать — научно-популярную литературу, 
              классику или современную прозу с глубоким сюжетом.
            </p>
            <h3>Как это делать правильно:</h3>
            <ol>
              <li>Найди тихое место без отвлечений</li>
              <li>Отключи все уведомления и положи телефон в другой комнате</li>
              <li>Поставь таймер на 30 минут</li>
              <li>Читай внимательно, представляя описываемые сцены</li>
              <li>После чтения запиши 3-5 мыслей или вопросов, которые возникли</li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BrainPage;
