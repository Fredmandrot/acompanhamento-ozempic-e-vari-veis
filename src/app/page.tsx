"use client";

import { useState } from "react";
import { 
  Droplet, 
  Apple, 
  Wheat, 
  Syringe, 
  Camera, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  Shield,
  Zap,
  Heart
} from "lucide-react";

export default function OzempicLandingPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});

  const quizQuestions = [
    {
      question: "Você já utiliza Ozempic?",
      options: ["Sim, já uso", "Não, mas pretendo começar", "Estou considerando"]
    },
    {
      question: "Qual é seu principal objetivo?",
      options: ["Controle de peso", "Controle glicêmico", "Ambos"]
    },
    {
      question: "Você tem dificuldade em acompanhar sua nutrição?",
      options: ["Sim, sempre esqueço", "Às vezes", "Não, mas quero melhorar"]
    },
    {
      question: "Você gostaria de receber lembretes e sugestões personalizadas?",
      options: ["Sim, seria muito útil", "Talvez", "Não preciso"]
    }
  ];

  const handleQuizAnswer = (answer: string) => {
    setQuizAnswers({ ...quizAnswers, [quizStep]: answer });
    
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Quiz completo - mostrar resultado
      setTimeout(() => {
        alert("Perfeito! O Ozempic Tracker é ideal para você. Redirecionando para compra...");
        // Aqui você pode redirecionar para página de checkout
      }, 500);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({});
    setShowQuiz(false);
  };

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Pergunta {quizStep + 1} de {quizQuestions.length}
              </span>
              <span className="text-sm font-medium text-purple-600">
                {Math.round(((quizStep + 1) / quizQuestions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              {quizQuestions[quizStep].question}
            </h2>
            <div className="space-y-3">
              {quizQuestions[quizStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuizAnswer(option)}
                  className="w-full p-4 text-left bg-white border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium group-hover:text-purple-700">
                      {option}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transform group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Back button */}
          {quizStep > 0 && (
            <button
              onClick={() => setQuizStep(quizStep - 1)}
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              ← Voltar
            </button>
          )}
          
          <button
            onClick={resetQuiz}
            className="mt-4 text-gray-500 hover:text-gray-700 text-sm"
          >
            Cancelar quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-xl">
                <Syringe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Ozempic Tracker</h1>
                <p className="text-xs text-gray-500">Seu acompanhamento completo</p>
              </div>
            </div>
            <button
              onClick={() => setShowQuiz(true)}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
            >
              Comprar Agora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              🎉 Lançamento Especial - 50% OFF
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Acompanhe seu tratamento com{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ozempic
            </span>{" "}
            de forma inteligente
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            O aplicativo completo para monitorar proteínas, fibras, água e registrar seus dias de injeção com facilidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowQuiz(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Fazer Quiz e Comprar
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 border-2 border-gray-200">
              Ver Demonstração
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-500" />
              <span><strong className="text-gray-800">2.500+</strong> usuários ativos</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span><strong className="text-gray-800">4.9/5</strong> avaliação</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span><strong className="text-gray-800">100%</strong> seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Funcionalidades desenvolvidas especialmente para quem usa Ozempic
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-orange-400 to-red-500 p-3 rounded-xl w-fit mb-4">
              <Apple className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Controle de Proteínas</h3>
            <p className="text-gray-600">
              Monitore sua ingestão diária de proteínas com metas personalizadas e gráficos de progresso.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-3 rounded-xl w-fit mb-4">
              <Wheat className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Acompanhamento de Fibras</h3>
            <p className="text-gray-600">
              Registre e acompanhe sua ingestão de fibras para uma digestão saudável.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-blue-400 to-cyan-500 p-3 rounded-xl w-fit mb-4">
              <Droplet className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Hidratação Inteligente</h3>
            <p className="text-gray-600">
              Mantenha-se hidratado com lembretes e acompanhamento de consumo de água.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl w-fit mb-4">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Registro Fotográfico</h3>
            <p className="text-gray-600">
              Documente seus dias de injeção com fotos e mantenha um histórico visual completo.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl w-fit mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Relatórios Semanais</h3>
            <p className="text-gray-600">
              Receba análises detalhadas e sugestões personalizadas baseadas no seu progresso.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl w-fit mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Notificações Inteligentes</h3>
            <p className="text-gray-600">
              Lembretes automáticos para injeções, hidratação e registro de nutrientes.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher o Ozempic Tracker?
            </h2>
            <p className="text-lg text-purple-100">
              Desenvolvido por especialistas para resultados reais
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Interface Intuitiva</h3>
                <p className="text-purple-100">
                  Design simples e fácil de usar, perfeito para o dia a dia.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Dados Seguros</h3>
                <p className="text-purple-100">
                  Seus dados são armazenados com segurança no seu dispositivo.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Sem Mensalidades</h3>
                <p className="text-purple-100">
                  Pagamento único, acesso vitalício a todas as funcionalidades.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Suporte Dedicado</h3>
                <p className="text-purple-100">
                  Equipe pronta para ajudar você a aproveitar ao máximo o app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O que nossos usuários dizem
          </h2>
          <p className="text-lg text-gray-600">
            Histórias reais de pessoas que transformaram seu acompanhamento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "Finalmente consigo acompanhar tudo em um só lugar. O app é simples e me ajuda muito no dia a dia!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <div>
                <p className="font-bold text-gray-800">Maria Silva</p>
                <p className="text-sm text-gray-500">Usuária há 3 meses</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "Os relatórios semanais me ajudam a entender meu progresso. Recomendo muito!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                J
              </div>
              <div>
                <p className="font-bold text-gray-800">João Santos</p>
                <p className="text-sm text-gray-500">Usuário há 5 meses</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "Melhor investimento que fiz! Não consigo mais viver sem esse app."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div>
                <p className="font-bold text-gray-800">Ana Costa</p>
                <p className="text-sm text-gray-500">Usuária há 8 meses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Oferta Especial de Lançamento</h2>
              <p className="text-purple-100">Por tempo limitado</p>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-3xl text-gray-400 line-through">R$ 197,00</span>
                  <span className="text-5xl md:text-6xl font-bold text-gray-800">R$ 97,00</span>
                </div>
                <p className="text-lg text-gray-600">Pagamento único • Acesso vitalício</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Todas as funcionalidades incluídas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Atualizações gratuitas para sempre</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Suporte prioritário</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Garantia de 30 dias</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Sem mensalidades ou taxas ocultas</span>
                </div>
              </div>

              <button
                onClick={() => setShowQuiz(true)}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" />
                Fazer Quiz e Garantir Minha Vaga
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                🔒 Pagamento 100% seguro • Satisfação garantida
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar seu acompanhamento?
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já estão tendo resultados incríveis com o Ozempic Tracker.
          </p>
          <button
            onClick={() => setShowQuiz(true)}
            className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            Começar Agora com 50% OFF
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-purple-100 mt-4">
            ⏰ Oferta válida apenas para os próximos 100 clientes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-purple-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="mb-2">© 2024 Ozempic Tracker. Todos os direitos reservados.</p>
          <p className="text-sm">Desenvolvido com ❤️ para melhorar sua saúde</p>
        </div>
      </footer>
    </div>
  );
}
