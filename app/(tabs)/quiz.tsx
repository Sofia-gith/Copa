import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { s } from "@/src/theme/quizStyles";
import { colors } from "@/src/theme/colors";
import { CIDADES } from "@/src/data/destinos";
import { JOGADORES } from "@/constants/Jogadores";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

// ─── Dados Mockados (Ranking) ──────────────────────────────────────────────────

const RANKING_MOCK = [
  { id: "1", nome: "Matheus A.", iniciais: "MA", xp: 4280, vitorias: 12 },
  { id: "2", nome: "Julia G.", iniciais: "JG", xp: 3915, vitorias: 10 },
  { id: "3", nome: "Carlos R.", iniciais: "CR", xp: 3540, vitorias: 8 },
];

// ─── Gerador de Perguntas ─────────────────────────────────────────────────────

function generateQuestions(): Question[] {
  const questions: Question[] = [];

  // Perguntas sobre Cidades/Países
  CIDADES.forEach((cidade) => {
    questions.push({
      id: `p-pais-${cidade.id}`,
      text: `Em qual país fica a cidade de ${cidade.nome}?`,
      options: ["Canadá", "México", "Estados Unidos", "Brasil"],
      correctAnswer: cidade.pais === "Canada" ? "Canadá" : cidade.pais === "Mexico" ? "México" : "Estados Unidos",
    });

    questions.push({
      id: `p-ponto-${cidade.destaque.id}`,
      text: `Onde se localiza o ponto turístico "${cidade.destaque.nome}"?`,
      options: ["Toronto", "Miami", "Mexico City", "Los Angeles"],
      correctAnswer: cidade.nome,
    });
  });

  // Perguntas sobre Jogadores
  const jogadoresFamosos = JOGADORES.filter(f => f.raridade === "Lendário" && f.tipoCard === "Jogador").slice(0, 5);
  jogadoresFamosos.forEach(j => {
    questions.push({
      id: `p-jog-${j.id}`,
      text: `Por qual seleção o jogador ${j.nome} é conhecido?`,
      options: ["Brasil", "Argentina", "França", "Alemanha"],
      correctAnswer: j.selecao,
    });
  });

  return questions.sort(() => Math.random() - 0.5).slice(0, 5);
}

// ─── Componentes ──────────────────────────────────────────────────────────────

function RankingSection() {
  return (
    <View style={s.rankingCard}>
      <View style={s.sectionHeader}>
        <Text style={s.sectionTitle}>RANKING SEMANAL</Text>
        <Ionicons name="trophy-outline" size={16} color={colors.gold} />
      </View>
      <View style={s.rankList}>
        {RANKING_MOCK.map((item, index) => (
          <View key={item.id} style={s.rankItem}>
            <Text style={s.rankPosition}>{index + 1}º</Text>
            <View style={s.rankAvatar}>
              <Text style={s.rankAvatarText}>{item.iniciais}</Text>
            </View>
            <View style={s.rankInfo}>
              <Text style={s.rankName}>{item.nome}</Text>
              <Text style={s.rankXP}>{item.vitorias} vitórias</Text>
            </View>
            <Text style={s.rankScore}>{item.xp} XP</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

// ─── Tela Principal ────────────────────────────────────────────────────────────

export default function QuizScreen() {
  const [gameState, setGameState] = useState<"idle" | "playing" | "result">("idle");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const startQuiz = () => {
    const q = generateQuestions();
    setQuestions(q);
    setCurrentIndex(0);
    setScore(0);
    setGameState("playing");
  };

  const handleOptionPress = (option: string) => {
    if (showFeedback) return;

    setSelectedOption(option);
    setShowFeedback(true);

    if (option === questions[currentIndex].correctAnswer) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(i => i + 1);
        setSelectedOption(null);
        setShowFeedback(false);
      } else {
        setGameState("result");
      }
    }, 1500);
  };

  const currentQuestion = questions[currentIndex];

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView style={s.scroll} contentContainerStyle={s.container} showsVerticalScrollIndicator={false}>
        
        <View style={s.header}>
          <Text style={s.headerSub}>DESAFIOS</Text>
          <Text style={s.headerTitle}>Arena CopaDex</Text>
        </View>

        {gameState === "idle" && (
          <>
            <RankingSection />
            <View style={s.quizCard}>
              <View style={s.quizIcon}>
                <Ionicons name="flash" size={24} color="#7F77DD" />
              </View>
              <Text style={s.quizTitle}>Quiz do Dia</Text>
              <Text style={s.quizDesc}>
                Teste seus conhecimentos sobre as sedes da Copa 2026 e a história do futebol.
              </Text>
              <TouchableOpacity style={s.startBtn} activeOpacity={0.8} onPress={startQuiz}>
                <Text style={s.startBtnText}>INICIAR DESAFIO</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {gameState === "playing" && currentQuestion && (
          <View style={s.quizCard}>
            <View style={s.questionHeader}>
              <Text style={s.questionCount}>QUESTÃO {currentIndex + 1}/5</Text>
              <View style={s.timerBarBg}>
                <View style={[s.timerBarFill, { width: `${((currentIndex + 1) / 5) * 100}%` }]} />
              </View>
            </View>

            <Text style={s.questionText}>{currentQuestion.text}</Text>

            <View style={s.optionsList}>
              {currentQuestion.options.map((option, index) => {
                const isCorrect = option === currentQuestion.correctAnswer;
                const isSelected = option === selectedOption;
                
                let optionStyle: any[] = [s.optionBtn];
                if (showFeedback) {
                  if (isCorrect) optionStyle.push(s.optionBtnCorrect);
                  else if (isSelected) optionStyle.push(s.optionBtnWrong);
                }

                return (
                  <TouchableOpacity 
                    key={index} 
                    style={optionStyle} 
                    onPress={() => handleOptionPress(option)}
                    disabled={showFeedback}
                  >
                    <View style={s.optionLetter}>
                      <Text style={s.optionLetterText}>
                        {String.fromCharCode(65 + index)}
                      </Text>
                    </View>
                    <Text style={s.optionText}>{option}</Text>
                    {showFeedback && isCorrect && (
                      <Ionicons name="checkmark-circle" size={20} color={colors.greenLight} />
                    )}
                    {showFeedback && isSelected && !isCorrect && (
                      <Ionicons name="close-circle" size={20} color="#EB5757" />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        )}

        {gameState === "result" && (
          <View style={[s.quizCard, s.resultsContainer]}>
            <Ionicons name="medal" size={64} color={colors.gold} style={{ marginBottom: 16 }} />
            <Text style={s.resultTitle}>Desafio Concluído!</Text>
            <Text style={s.resultScore}>{score}/5</Text>
            <Text style={s.resultSub}>Você acertou {Math.round((score/5) * 100)}% das perguntas</Text>
            
            <View style={s.xpBadge}>
              <Ionicons name="flash" size={16} color={colors.greenLight} />
              <Text style={s.xpText}>+{score * 20} XP ADQUIRIDOS</Text>
            </View>

            <TouchableOpacity 
              style={[s.startBtn, { width: "100%" }]} 
              onPress={() => setGameState("idle")}
            >
              <Text style={s.startBtnText}>VOLTAR AO INÍCIO</Text>
            </TouchableOpacity>
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}
