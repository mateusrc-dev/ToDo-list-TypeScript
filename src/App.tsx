import "./global.css";
import styles from "./App.module.css";
import Clipboard from "./assets/Clipboard.svg";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { useEffect, useState } from "react";

export function App() {
  const [assignments, setAssignments] = useState([{check: false, content: "Assistir todos os episódios de Naruto, Naruto Shippuden e Boruto em um mês!"}]);
  const [newAssignment, setNewAssignment] = useState("");
  const [countCheks, setCountCheks] = useState(0);
  const [state, setState] = useState(0);

  function handleAddNewAssignments() {
    if (newAssignment.length == 0) {
      alert("Escreva algo para criar uma nova tarefa!")
      return
    }
    setAssignments((prevState) => [
      ...prevState,
      { check: false, content: newAssignment },
    ]);
    setNewAssignment("");
  }

  function handleAssignmentsDelete(deleted: string) {
    if (state == 0) {
      setState(1);
    } else if (state == 1) {
      setState(0)
    }
    const assignmentsWithoutDelete = assignments.filter(
      (assignment) => assignment.content !== deleted
    );
    setAssignments(assignmentsWithoutDelete);
  }

  function handleCheckAssignment(index: number) {
    if (state == 0) {
      setState(1);
    } else if (state == 1) {
      setState(0)
    }
    let Assignments = assignments;
    if (Assignments[index].check == true) {
      Assignments[index].check = false;
    } else if (Assignments[index].check == false) {
      Assignments[index].check = true;
    }
    setAssignments(Assignments);
  }

  useEffect(() => {
    function handleCheck() {
      let checksTrue = 0;
      for (let i = 0; assignments.length > i; i++) {
        if (assignments[i].check == true) {
          checksTrue += 1
        }
      }
      return checksTrue
    }
    setCountCheks(handleCheck())
  }, [state]);

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.inputAndButton}>
          <Input
            newAssignment={newAssignment}
            setNewAssignment={setNewAssignment}
          />
          <Button onClick={handleAddNewAssignments} disabled={newAssignment.length == 0} />
        </div>
        <div className={styles.tasks}>
          <div className={styles.tasksCreated}>
            <strong>Tarefas criadas</strong>
            <span>{assignments.length}</span>
          </div>
          <div className={styles.completedTasks}>
            <strong>Concluídas</strong>
            <span>{countCheks} de {assignments.length}</span>
          </div>
        </div>
        <div className={styles.posts}>
          {assignments.map((assignment, index) => (
            <Post
              key={String(assignment.content)}
              assignment={assignment}
              handleAssignmentsDelete={handleAssignmentsDelete}
              handleCheckAssignment={handleCheckAssignment}
              index={index}
            />
          ))}
        </div>
        {assignments.length === 0 ? (
          <div className={styles.nullAssignments}>
            <img src={Clipboard} alt="lista vazia" />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong> <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        ) : null}
      </div>
    </main>
  );
}
