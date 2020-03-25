class Api::TodosController < ApplicationController
    # each action can return 3 things
    # html
    # xml
    # *json

    def index
        render json: Todo.all
    end

    def create
        @todo = Todo.new(todo_params)
        if @todo.save
            render json: @todo
        else
            render json: { errors: @todo.errors }, status: :unprocessable_entity
        end
    end

    def update
        @todo = Todo.find(params[:id])
        if @todo.update(todo_params)
            render json: @todo
        else
            render json: { errors: @todo.errors }, status: :unprocessable_entity
        end
    end

    def destroy 
        Todo.find(params[:id]).destroy
        render json: { message: 'The todo is deleted'}    
    end

    private
    def todo_params
        params.require(:todo).permit(:title, :complete)
    end
end
