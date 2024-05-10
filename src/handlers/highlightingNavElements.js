import styles from '../components/Links/Links.module.css'

const highlightingNavElements = (ref) => {
  const listItem = ref.current.childNodes
  listItem.forEach((list) => {
    if (window.location.href === list.firstElementChild.href) {
      list.classList.add(styles.active)
    } else {
      list.classList.remove(styles.active)
    }
  })
}

export default highlightingNavElements
