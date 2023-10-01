import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import Logo from './assets/notepad.png';
import SearchIconMaterial from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/StarBorder';
import favoriteTrueImage from './assets/favoriteTrue.png';
import EditTaskImg from './assets/EditTask.png';
import ColorEditImage from './assets/EditColor.png';

import {
    Container,
    ContainerHead,
    Image,
    H1,
    Input,
    SearchIconWrapper,
    ClearIconWrapper,
    ContainerCreateTasks,
    TAskWrapper,
    InputTaskTitle,
    InputTaskNote,
    StarIconWrapper,
    Button,
    ContainerFavoriteTask,
    TaskFavotite,
    LabelStyled,
    TitleAndImageWrapper,
    TaskTitleStyled,
    FavoriteImage,
    TaskNoteStyled,
    EditTask,
    EditColorImage,
    WrapperEditImg,
    ContainerAllFavoriteTask,
    ContainerTask,
    CustomModal,
    customModalStyles 
} from "./styles";

const App = () => {

    const [tasks, setTasks] = useState([]);
    const inputTitle = useRef()
    const inputNote = useRef()

    const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editedTask, setEditedTask] = useState({});

  const fetchTasks = async () => {
    try {
        const { data: newTask } = await axios.get("http://localhost:3001/tarefas");
        setTasks(newTask);
    } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
    }
};

    async function AddNewTask() {
        const { data: newTask } = await axios.post("http://localhost:3001/tarefas", {
            title: inputTitle.current.value,
            note: inputNote.current.value,
        });
        setTasks([...tasks, newTask])
    }

    useEffect(() => {
        // Carregue as tarefas quando o componente for montado
        fetchTasks();
    }, []);

    async function deleteTask(taskId) {
        await axios.put(`http://localhost:3001/tarefas/${taskId}`)
        const newTask = tasks.filter(task => task._id !== taskId)
    
        setTasks(newTask);
    }
       // Função para abrir o modal de edição
       const openEditModal = (task) => {
        setEditedTask(task);
        setModalIsOpen(true);
    };

    // Função para salvar as alterações no modal
    const saveEditedTask = async () => {
        try {
            const response = await axios.put(`http://localhost:3001/tarefas/${editedTask._id}`, {
                title: editedTask.title,
                note: editedTask.note,
            });

            if (response.status === 200) {
                fetchTasks(); // Recarregue as tarefas após salvar
                setModalIsOpen(false); // Feche o modal após salvar
            }
        } catch (error) {
            console.error("Erro ao atualizar a tarefa:", error);
        }
    };

    return (
        <Container>
            <ContainerHead>
                <Image alt="logo-imagem" src={Logo} />
                <H1>CoreNotes</H1>
                <Input
                    type="text"
                    placeholder="Pesquisar notas"
                />
                <SearchIconWrapper>
                    <SearchIconMaterial />
                </SearchIconWrapper>
                <ClearIconWrapper>
                    <ClearIcon />
                </ClearIconWrapper>
            </ContainerHead>
            <ContainerCreateTasks>
                <Button onClick={AddNewTask}>criar Tarefa</Button>
                <TAskWrapper>
                    <InputTaskTitle
                        ref={inputTitle}
                        type="text"
                        placeholder="Título"
                    />
                    <InputTaskNote
                        ref={inputNote}
                        type="text"
                        placeholder="Criar nota..."
                    />
                </TAskWrapper>
                <StarIconWrapper>
                    <StarIcon />
                </StarIconWrapper>
            </ContainerCreateTasks>
            <ContainerFavoriteTask>
  <p>Tarefas Favoritas:</p>
  <TaskFavotite>
    {tasks.map((task) => {
      if (task.isFavorite) {
        const taskColorClassName = `color-${task.colorTask || 'default'}`;

        return (
          <div key={task._id} style={{ width: '60%' }}>
            <LabelStyled className={taskColorClassName}>
              <TitleAndImageWrapper>
                <TaskTitleStyled style={{backgroundColor : task.colorTask}}>
                  {task.title}
                  <FavoriteImage src={favoriteTrueImage} alt="Tarefa-Favoritada" />
                </TaskTitleStyled>
              </TitleAndImageWrapper>
              <TaskNoteStyled style={{backgroundColor : task.colorTask}}>{task.note}</TaskNoteStyled>
              <WrapperEditImg>
                <EditTask
                src={EditTaskImg} 
                alt="Edita - Tarefa" 
                onClick={() => openEditModal(task)}
                />
                <EditColorImage
                  src={ColorEditImage}
                  alt="Altera-Cor-Tarefa"
                />
                 <ClearIcon onClick={() => deleteTask(task._id)} />
              </WrapperEditImg>
            </LabelStyled>
          </div>
        );
      }
      return null;
    })}
  </TaskFavotite>
</ContainerFavoriteTask>
            <ContainerAllFavoriteTask>
                <p>Outras Tarefas:</p>
                <TaskFavotite>
                    {tasks.map((task) => {
                        if (!task.isFavorite) {
                            return (
                                <div key={task._id} style={{ width: '60%' }}>
                                    <LabelStyled>
                                        <TaskTitleStyled>{task.title}</TaskTitleStyled>
                                        <TaskNoteStyled>{task.note}</TaskNoteStyled>
                                        <ClearIcon onClick={() => deleteTask(task._id)} />
                                    </LabelStyled>
                                </div>
                            );
                        }
                        return null;
                    })}
                </TaskFavotite>
            </ContainerAllFavoriteTask>
            <ContainerTask>
            </ContainerTask>
            <CustomModal
    isOpen={modalIsOpen}
    onRequestClose={() => setModalIsOpen(false)}
    contentLabel="Editar Tarefa"
    style={customModalStyles}
>
    {/* Conteúdo do modal */}
    <h2>Editar Tarefa</h2>
    <input
        type="text"
        value={editedTask.title}
        onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
    />
    <textarea
        value={editedTask.note}
        onChange={(e) => setEditedTask({ ...editedTask, note: e.target.value })}
    />
    <button onClick={saveEditedTask}>Salvar</button>
    <button onClick={() => setModalIsOpen(false)}>Cancelar</button>
</CustomModal>
        </Container>
    )
}

export default App;