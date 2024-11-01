import { Beer, BookOpenCheck, Drama, GraduationCap, HandMetal, Laugh, Package, PartyPopper, Sparkles, Trophy } from 'lucide-react'

export function getIconsByName(name: string) {
  if (name === "Terceirão") return <Trophy />;
  if (name === "Nono Ano") return <Sparkles />;
  if (name === "Formatura") return <GraduationCap />;
  if (name === "Amigos") return <HandMetal />;
  if (name === "Atlética") return <Beer />;
  if (name === "Faculdade") return <BookOpenCheck />;
  if (name === "Réveillon") return <PartyPopper />;
  if (name === "Carnaval") return <Drama />;
  if (name === "Diversas") return <Laugh />;

  return <Package />;
}
