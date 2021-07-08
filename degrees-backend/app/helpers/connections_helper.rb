module ConnectionsHelper

    def degrees_of_separation (node, endNode, edges)

      if edges.length < 1
        puts "edges length is #{edges.length}"
        return
      end

        #recursive function, only define values on first iteration
        if !defined?(@queue)
          @queue = []
          @queue.push([node,0])
          @degrees = 0
          @checked = []
          @unchecked = edges
        end
    
        # iterate through all edges for first node in queue
        @unchecked.each do |current|
      
          @currentNode = @queue[0][0]
          @step = @queue[0][1]
      
          if @currentNode == endNode
            puts "Last node is #{@currentNode} which is #{@step} steps aways"
            return @step
          end
      
          if current[0] == @currentNode
            @queue.push([current[1], @step+= 1])
          elsif current[1] == @currentNode
            @queue.push([current[0], @step+= 1])
          else
            @checked.push(current)
          end
          
        end
      
        # ends iteration if beyond a certain level
        if @step == 6
          return false
        end

        #remove first node from queue, then repeat function
        @queue.shift
        degrees_of_separation(node, endNode, edges)
      
      end      
end
