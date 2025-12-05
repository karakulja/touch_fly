"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    // Mark animation as complete after it runs once
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#1a1a1a]">
      {/* Header with animated logo */}
      <header className="border-b border-[#1a1a1a]/10 bg-[#f5f1e8] sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight relative">
              <span>TOUCH</span>
              <span className={`inline-block ${!animationComplete ? "animate-fly-around" : ""}`}>×</span>
              <span>FLY</span>
            </h1>
          </div>
          <p className="text-center text-sm mt-2 tracking-widest text-[#1a1a1a]/60">ЛАБОРАТОРИЯ ОЩУЩЕНИЙ</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                ВЫ БОИТЕСЬ МУХ.
                <br />
                МЫ ЭТО ЗНАЕМ.
              </h2>
              <p className="text-xl mb-6 leading-relaxed">Именно поэтому вы должны попробовать.</p>
              <p className="text-lg leading-relaxed text-[#1a1a1a]/80">
                Самый странный массаж в мире — и самый честный. Никаких "энергетических потоков", никакой эзотерики.
                Просто стерильные мухи-нектарофаги, научная лаборатория и ощущения, которых у вас никогда не было.
              </p>
              <p className="text-xl font-semibold mt-6">Это не для всех. Это для тех, кто готов.</p>
            </div>
            <div className="relative">
              <img src="/images/face-with-fly.png" alt="Лицо с мухой" className="w-full rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#1a1a1a] text-[#f5f1e8]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">О ЧЁМ ЭТО</h2>
          <p className="text-xl leading-relaxed mb-6">
            Представьте: от 1 до 5 мух ползают по вашей коже. Их лапки микроскопические, движения непредсказуемые,
            прикосновения — как электрические разряды нежности. Щекотно. Странно. Гипнотично.
          </p>

          <div className="bg-[#f5f1e8] text-[#1a1a1a] p-8 rounded-lg mt-8">
            <h3 className="text-2xl font-bold mb-4">Факты без прикрас:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-[#d4a574] mr-3 text-2xl">•</span>
                <span>Мухи выращены на специализированной ферме</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d4a574] mr-3 text-2xl">•</span>
                <span>Живут в лабораторных условиях под надзором энтомологов</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d4a574] mr-3 text-2xl">•</span>
                <span>Полностью стерильны — заражение исключено</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d4a574] mr-3 text-2xl">•</span>
                <span>Питаются только нектаром (отсюда название — нектарофаги)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#d4a574] mr-3 text-2xl">•</span>
                <span>Перед сеансом на тело наносится привлекающий состав — мухи знают, куда ползти</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 border-l-4 border-[#d4a574] pl-6">
            <h3 className="text-2xl font-bold mb-4">Выбор за вами:</h3>
            <ul className="space-y-2 text-lg">
              <li>• 1–5 мух на сеанс</li>
              <li>• 5–30 минут процедуры</li>
              <li>• Душ после — обязательно и бесплатно</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">ЗАЧЕМ ЭТО НУЖНО</h2>
          <div className="text-xl leading-relaxed space-y-4">
            <p>Потому что вы устали от обычного.</p>
            <p>Потому что "расслабляющий массаж с лавандой" — это скучно.</p>
            <p>Потому что иногда нужно делать то, о чём будешь рассказывать на вечеринках следующие пять лет.</p>
            <p className="text-2xl font-bold mt-8">
              Это не терапия. Это опыт. Чистый, странный, научно обоснованный опыт сенсорной перегрузки.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">КАК ЭТО РАБОТАЕТ</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-3xl font-bold text-[#d4a574] shrink-0">1</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Консультация</h3>
                    <p className="text-lg leading-relaxed">
                      Мы объясняем процесс, показываем лабораторию (да, можно посмотреть на мух заранее)
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-3xl font-bold text-[#d4a574] shrink-0">2</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Нанесение состава</h3>
                    <p className="text-lg leading-relaxed">
                      На выбранные зоны тела наносится безопасная смесь, привлекающая мух
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-3xl font-bold text-[#d4a574] shrink-0">3</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Сеанс</h3>
                    <p className="text-lg leading-relaxed">
                      Мухи делают своё дело, вы — своё (дышите, концентрируетесь, смеётесь или молчите)
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-3xl font-bold text-[#d4a574] shrink-0">4</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Душ</h3>
                    <p className="text-lg leading-relaxed">Смываете состав, приходите в себя</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-3xl font-bold text-[#d4a574] shrink-0">5</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Рефлексия</h3>
                    <p className="text-lg leading-relaxed">По желанию можем обсудить ощущения</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/images/massage-with-flies.png"
                alt="Массаж с мухами"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-16 bg-[#1a1a1a] text-[#f5f1e8]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">НАУКА И БЕЗОПАСНОСТЬ</h2>
          <p className="text-xl leading-relaxed mb-8">
            Мы не шарлатаны. Мы не продаём "исцеление" или "очищение чакр".
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-[#f5f1e8] border-none">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a]">Что у нас есть:</h3>
                <ul className="space-y-2 text-[#1a1a1a]">
                  <li>• Сертифицированная энтомологическая лаборатория</li>
                  <li>• Протоколы стерилизации и карантина</li>
                  <li>• Ветеринарный контроль</li>
                  <li>• Гипоаллергенный состав</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#f5f1e8] border-none">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a]">Чего у нас нет:</h3>
                <ul className="space-y-2 text-[#1a1a1a]">
                  <li>• Медицинских показаний</li>
                  <li>• Лечебного эффекта</li>
                  <li>• Обещаний "омоложения"</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="text-xl leading-relaxed border-l-4 border-[#d4a574] pl-6">
            Это сенсорная процедура. Экзотика. Эксперимент над собственными границами комфорта.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">ЦЕНЫ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-[#1a1a1a] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">"Первый контакт"</h3>
                <p className="text-[#1a1a1a]/60 mb-4">1 муха, 5 минут</p>
                <p className="text-4xl font-bold mb-4 text-[#d4a574]">3 000 ₽</p>
                <p className="text-sm leading-relaxed">Для тех, кто не уверен, но любопытен.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#d4a574] bg-[#d4a574]/5 hover:shadow-xl transition-shadow scale-105">
              <CardContent className="p-8">
                <div className="text-xs font-bold bg-[#d4a574] text-white px-3 py-1 rounded-full inline-block mb-3">
                  ХИТ
                </div>
                <h3 className="text-2xl font-bold mb-2">"Стандартный рой"</h3>
                <p className="text-[#1a1a1a]/60 mb-4">3 мухи, 15 минут</p>
                <p className="text-4xl font-bold mb-4 text-[#d4a574]">5 500 ₽</p>
                <p className="text-sm leading-relaxed">Наш хит. Достаточно, чтобы понять всю глубину ощущений.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#1a1a1a] bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">"Полное погружение"</h3>
                <p className="text-[#1a1a1a]/60 mb-4">5 мух, 30 минут</p>
                <p className="text-4xl font-bold mb-4 text-[#d4a574]">9 000 ₽</p>
                <p className="text-sm leading-relaxed">Для смелых. Для тех, кто хочет историю на всю жизнь.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">ЧАСТЫЕ ВОПРОСЫ</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[#d4a574] pl-6">
              <h3 className="text-xl font-bold mb-2">Это безопасно?</h3>
              <p className="text-lg leading-relaxed">
                Да. Научная лаборатория, стерильные условия, контроль энтомологов.
              </p>
            </div>
            <div className="border-l-4 border-[#d4a574] pl-6">
              <h3 className="text-xl font-bold mb-2">Это больно?</h3>
              <p className="text-lg leading-relaxed">Нет. Это щекотно и странно, но не больно.</p>
            </div>
            <div className="border-l-4 border-[#d4a574] pl-6">
              <h3 className="text-xl font-bold mb-2">А если я передумаю во время сеанса?</h3>
              <p className="text-lg leading-relaxed">Останавливаем немедленно. Без вопросов, без доплат.</p>
            </div>
            <div className="border-l-4 border-[#d4a574] pl-6">
              <h3 className="text-xl font-bold mb-2">Можно сфотографировать?</h3>
              <p className="text-lg leading-relaxed">Да, но только после подписания согласия. Мухи — не актёры.</p>
            </div>
            <div className="border-l-4 border-[#d4a574] pl-6">
              <h3 className="text-xl font-bold mb-2">Это легально?</h3>
              <p className="text-lg leading-relaxed">Абсолютно. У нас все разрешения.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-[#1a1a1a] text-[#f5f1e8]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">ЗАПИСАТЬСЯ</h2>
              <p className="text-xl leading-relaxed mb-6">
                Мы не для всех. Если вы дочитали до сюда — возможно, вы для нас.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-[#d4a574] text-2xl">✦</span>
                  <div>
                    <p className="font-bold">Telegram:</p>
                    <a href="https://t.me/touchflylab" className="text-[#d4a574] hover:underline text-lg">
                      @touchflylab
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#d4a574] text-2xl">✦</span>
                  <div>
                    <p className="font-bold">Адрес:</p>
                    <p className="text-lg">Аллея Мухова, 17</p>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-[#d4a574] hover:bg-[#d4a574]/90 text-[#1a1a1a] font-bold text-lg px-8 py-6"
              >
                Записаться на сеанс
              </Button>
              <p className="text-sm mt-6 text-[#f5f1e8]/80">
                Сеансы по предварительной записи. Мы маленькие, мы странные, и мы гордимся этим.
              </p>
            </div>
            <div>
              <img src="/images/location.png" alt="Локация салона" className="w-full rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#f5f1e8] border-t border-[#1a1a1a]/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-bold mb-2">TOUCH×FLY</p>
          <p className="text-sm tracking-widest text-[#1a1a1a]/60">ЛАБОРАТОРИЯ ОЩУЩЕНИЙ</p>
        </div>
      </footer>
    </div>
  )
}
