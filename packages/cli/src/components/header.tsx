const Header = () => {
  return (
    <box justifyContent='center' alignItems='center'>
      <box
        flexDirection='row'
        justifyContent='center'
        alignItems='center'
        gap={0.5}
      >
        <ascii-font font='block' color='gray' text='Night' />
        <ascii-font font='block' text='Code' />
      </box>
    </box>
  )
}

export { Header }
