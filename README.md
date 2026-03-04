
---

## B) `todo-list`
✅ Muito bom: README completo e deploy publicado. :contentReference[oaicite:5]{index=5}  
🔧 Melhorias:
- colocar “Live Demo” logo no início (já tem)
- acrescentar “Arquitetura” (como a tarefa é renderizada / salva)
- adicionar “Testes manuais” (mini checklist) para aproximar de QA também

### README novo
```md
# ✅ To-Do List (JavaScript + LocalStorage)

Aplicação de lista de tarefas feita com **HTML, CSS e JavaScript (Vanilla)**, com persistência no navegador usando **LocalStorage**.

🔗 **Live Demo:** https://gabriellesca.github.io/todo-list/

---

## ✨ Funcionalidades
- Adicionar e remover tarefas
- Marcar como concluída
- Persistência automática (LocalStorage)
- Interface simples e responsiva

---

## 🧰 Tecnologias
- HTML5
- CSS3
- JavaScript (ES6)

---

## 🧠 O que eu pratiquei
- DOM: criação dinâmica de elementos
- Eventos (`click`, `submit`)
- Serialização com `JSON.stringify` / `JSON.parse`
- Controle de estado da aplicação (lista de tarefas)

---

## 🗂️ Estrutura do projeto
- `index.html` → estrutura da página
- `styles.css` → estilos
- `script.js` → regras da aplicação (criar, concluir, remover, salvar)

---

## ✅ Checklist de testes (manual)
- [ ] Criar tarefa com texto válido
- [ ] Impedir tarefa vazia
- [ ] Marcar/desmarcar como concluída
- [ ] Remover tarefa
- [ ] Recarregar página e manter estado (LocalStorage)

---

## ▶️ Como executar
```bash
git clone https://github.com/gabriellesca/todo-list.git
cd todo-list
