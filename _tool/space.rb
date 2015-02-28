# encoding: utf-8
#
# insert a space between a Chinese word and an English letter

require 'auto-space'

root = File.expand_path(File.join(File.dirname(__FILE__), '..', 'book'))

Dir["#{root}/*/*"].each do |f|
  s = IO.read(f).gsub(/\,\s?/, '，')
  File.open(f, 'w') do |f|
    f.write(s.auto_space!)
  end
end

