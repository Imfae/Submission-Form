# Submission-Form

This project focuses on the creation of a user friendly, interactive submission form.

While the bulk of the code is dedicated to creating a pleasing layout, I find the more difficult part of the project to be the few lines styling input validation interaction.

As you probably know, the default state of an empty `<input>` with a validity check is `invalid`. So simply using `input:invalid` would cause all such `<input>` to start with `input:invalid` styles, namely, in my project, a red outline. 

<span style="color:red">A sea of red</span> is a discouraging visual for the common webpage user.

So to ensure that the browser loads the default `input` styles instead of `input:invalid` styles, I gave all `<input>` empty `placeholder` attributes. Then by ordering `input:placeholder-shown` behind `input:invalid`, `invalid` styles are overridden until the user interacts with the form. 

Also, to prevent `input:focus` styles from being likewise overridden by `input:invalid`, a redundant `:empty` pseudo-class is added to `input:focus` so it would have a higher specificity.