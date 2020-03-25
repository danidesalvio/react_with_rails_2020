5.times do
    Todo.create(
        title: Faker::Hacker.say_something_smart,
        complete: false
    )
end