class RacerSerializer
  include JSONAPI::Serializer
  attributes :f_name, :l_name, :city, :state, :current_location
end
