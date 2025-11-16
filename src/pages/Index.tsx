import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

type Zone = 'anxiety' | 'boredom' | 'flow' | null;

const zones = [
  {
    id: 'anxiety' as const,
    title: 'Зона тревоги',
    description: 'Задача слишком сложна',
    emotion: 'Не справлюсь!',
    icon: 'AlertTriangle',
    color: 'anxiety',
    bgGradient: 'from-orange-50 to-orange-100',
    borderColor: 'border-anxiety',
    textColor: 'text-anxiety',
    emoji: '😰'
  },
  {
    id: 'flow' as const,
    title: 'Зона потока',
    description: 'Задача по силам',
    emotion: 'Внутренняя мотивация, радость, концентрация',
    icon: 'Sparkles',
    color: 'flow',
    bgGradient: 'from-blue-50 to-blue-100',
    borderColor: 'border-flow',
    textColor: 'text-flow',
    emoji: '✨'
  },
  {
    id: 'boredom' as const,
    title: 'Зона скуки',
    description: 'Задача слишком проста',
    emotion: 'Мне скучно',
    icon: 'CloudOff',
    color: 'boredom',
    bgGradient: 'from-gray-50 to-gray-100',
    borderColor: 'border-boredom',
    textColor: 'text-boredom',
    emoji: '😴'
  }
];

export default function Index() {
  const [activeZone, setActiveZone] = useState<Zone>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Три зоны состояния
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Найдите свою зону потока — баланс между сложностью задачи и вашими навыками
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {zones.map((zone, index) => (
            <Card
              key={zone.id}
              className={`p-8 cursor-pointer transition-all duration-500 border-4 hover:scale-105 hover:shadow-2xl ${
                activeZone === zone.id ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              } ${zone.borderColor} bg-gradient-to-br ${zone.bgGradient}`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
              onClick={() => setActiveZone(activeZone === zone.id ? null : zone.id)}
            >
              <div className="text-center space-y-4">
                <div className={`text-6xl mb-4 ${activeZone === zone.id ? 'animate-pulse-glow' : ''}`}>
                  {zone.emoji}
                </div>
                
                <div className={`w-16 h-16 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center ${zone.textColor}`}>
                  <Icon name={zone.icon} size={32} />
                </div>

                <h2 className={`text-2xl font-bold ${zone.textColor}`}>
                  {zone.title}
                </h2>

                <p className="text-gray-700 font-semibold">
                  {zone.description}
                </p>

                <div className={`transition-all duration-500 overflow-hidden ${
                  activeZone === zone.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-4 border-t-2 border-gray-300">
                    <p className="text-lg font-medium text-gray-800 italic">
                      "{zone.emotion}"
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-4 border-flow animate-scale-in">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-flow to-blue-600 flex items-center justify-center flex-shrink-0">
              <Icon name="Lightbulb" size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Как достичь состояния потока?
              </h3>
              <div className="space-y-3 text-lg text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <p><strong>Найдите оптимальную сложность:</strong> задача должна быть достаточно сложной, чтобы быть интересной, но выполнимой с вашими навыками</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📈</span>
                  <p><strong>Постепенно усложняйте:</strong> по мере роста навыков увеличивайте сложность задач</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🧘</span>
                  <p><strong>Создайте условия:</strong> устраните отвлекающие факторы и полностью погрузитесь в процесс</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-anxiety"></div>
              <div className="w-4 h-4 rounded-full bg-flow"></div>
              <div className="w-4 h-4 rounded-full bg-boredom"></div>
            </div>
            <p className="text-gray-600 font-medium">
              Нажмите на карточку для подробностей
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
