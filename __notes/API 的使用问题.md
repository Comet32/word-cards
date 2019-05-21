[TOC]

## KeyboardAvoidingView 的使用

KeyboardAvoidingView 组件在文档上的说明不够清楚，不过经过我的尝试还是明白了其如何使用。

先看代码：

```jsx
<KeyboardAvoidingView behavior='padding' style={styles.container}>
  <View style={styles.titleView}>
    <Text style={styles.titleText}>
      What is the title of your new deck?
    </Text>
  </View>
  <View style={styles.inputView}>
    <TextInput style={styles.textInput} placeholder="Deck Title" />
  </View >
</KeyboardAvoidingView>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  })
```

首先需要给当点击 TextInput 的输入框出现键盘时的整个视图添加一个 KeyboardAvoidingView 组件，然后设置 `behavior=‘padding’`，这样当输入框出现后，会让整个视图往上面平移，但你也可以理解为整个视图与键盘之间产生了一个 padding。



## TextInput 的 onChangText 属性

我们在将 TextInput 中的文本内容添加到状态时，需要使用 onChangeText 属性，而不是使用 onChange 事件，因为 onChangeText 传入的回调函数的第一个参数为文本域中输入的值。

代码：

```jsx
handleChangeInput = input => {
  this.setState(() => ({
    inputValue: input
  }))
}

<TextInput
  value={inputValue}
  onChangeText={this.handleChangeInput}
  style={styles.textInput}
  placeholder="Deck Title"
/>
```



