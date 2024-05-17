import { Text, Title, TextInput, Button, Image } from '@mantine/core'
import { useRouter } from 'next/navigation'
import image from '../../img/500.png'
import classes from './ServerError.module.css'

const ServerError = () => {
  const router = useRouter()

  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>500. That's an error.</Title>
        <Text fw={500} fz="lg" mb={5}>
          The server encountered an error and could not complete your request
        </Text>
        <Text fz="sm" c="dimmed">
          Please enable VPN and try again
        </Text>

        <div className={classes.controls}>
          <Button className={classes.control} onClick={() => router.refresh()}>
            Try again
          </Button>
        </div>
      </div>
      <Image src={image.src} className={classes.image} />
    </div>
  )
}

export default ServerError
